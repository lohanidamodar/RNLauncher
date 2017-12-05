package com.olohanitech.rnlauncher;

import android.content.pm.PackageInfo;
import android.content.pm.ApplicationInfo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import javax.annotation.Nullable;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.util.Base64;


public class InstalledAppsModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    private class AppDetail {
        CharSequence label;
        CharSequence name;
        Drawable icon;
        public String toString() {
            Bitmap icon;
            if(this.icon.getIntrinsicWidth() <= 0 || this.icon.getIntrinsicHeight() <= 0) {
                icon = Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888); // Single color bitmap will be created of 1x1 pixel
            } else {
                icon = Bitmap.createBitmap(this.icon.getIntrinsicWidth(), this.icon.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
            }
            final Canvas canvas = new Canvas(icon);
            this.icon.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
            this.icon.draw(canvas);

            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            icon.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            String encoded = Base64.encodeToString(byteArray, Base64.NO_WRAP);

            return "{\"label\":\"" + this.label + "\",\"name\":\"" + this.name + "\",\"icon\":\"" + encoded + "\"}";
        }
    }

    public InstalledAppsModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "InstalledApps";
    }

    @ReactMethod
    private String getApps(){
        List<AppDetail> apps = new ArrayList<>();
        List<PackageInfo> packages = this.reactContext
            .getPackageManager()
            .getInstalledPackages(0);

        for(final PackageInfo p: packages){
            if (this.reactContext.getPackageManager().getLaunchIntentForPackage(p.packageName) != null) {
                AppDetail app = new AppDetail();
                app.label = p.applicationInfo.loadLabel(this.reactContext.getPackageManager());
                app.name = p.packageName;
                app.icon = p.applicationInfo.loadIcon(this.reactContext.getPackageManager());
                apps.add(app);
            }
        }
        return apps.toString();

    }

    private List<String> getAllApps() {
        List<PackageInfo> packages = this.reactContext
            .getPackageManager()
            .getInstalledPackages(0);

        List<String> ret = new ArrayList<>();
        for (final PackageInfo p: packages) {
            ret.add(p.packageName);
        }
        return ret;
    }

    private List<String> getNonSystemApps() {
        List<PackageInfo> packages = this.reactContext
            .getPackageManager()
            .getInstalledPackages(0);

        List<String> ret = new ArrayList<>();
        for (final PackageInfo p: packages) {
            if ((p.applicationInfo.flags & ApplicationInfo.FLAG_SYSTEM) == 0) {
                ret.add(p.packageName);
            }
        }
        return ret;
    } 
    
    @ReactMethod
    private void launchApplication(String packageName){
        Intent launchIntent = this.reactContext.getPackageManager().getLaunchIntentForPackage(packageName);
        if (launchIntent != null) { 
            this.reactContext.startActivity(launchIntent);//null pointer check in case package name was not found
        }
    }

    @Override
    public @Nullable Map<String, Object> getConstants() {
        Map<String, Object> constants = new HashMap<>();

        constants.put("getApps", getApps());
        constants.put("getNonSystemApps", getNonSystemApps());
        return constants;
    }
}