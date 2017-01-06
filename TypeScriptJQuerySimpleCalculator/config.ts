/// <reference path="typings/require.d.ts" />
/// <reference path="bootstrapper.ts" />

require.config({
    shim: {
        jquery: {
            exports: '$'
        }
    },
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
    }
});

require(['bootstrapper', 'jquery'],
    (bootstrapper, $) => {
        bootstrapper.run();
    });