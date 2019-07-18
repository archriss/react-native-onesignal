module.exports = {
    dependencies: {
        'react-native-onesignal': {
            platforms: {
                ios: {
                    podspecPath: `${__dirname}/node_modules/react-native-onesignal/react-native-onesignal.podspec`
                },
                android: {
                    packageImportPath: 'import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;',
                    packageInstance: 'new ReactNativeOneSignalPackage()'
                }
            }
        }
    }
};