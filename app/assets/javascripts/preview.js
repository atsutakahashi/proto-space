$(document).on('turbolinks:load', function(){
    $('#image').change(function(){
        if (!this.files.length) {
            return;
        }
        var file = this.files[0],           //画像１つのみ選択
            image = $('#main_image_uploader'),
            fileReader = new FileReader();

        // 読み込みが完了した際のイベントハンドラ。imgのsrcにデータセット
        fileReader.onload = function(event) {
            // 読み込んだデータをimgに設定
            image.children('img').attr('src', event.target.result);
            // imgLiquid - imgの親要素に指定
            image.imgLiquid({fill: false});
        };

        // 画像読み込み
        fileReader.readAsDataURL(file);

    });
});

$(document).on('turbolinks:load', function(){
    $('.0').change(function(){
        if (!this.files.length) {
            return;
        }
        var file = this.files[0],           //画像１つのみ選択
            image = $('.0'),
            fileReader = new FileReader();

        // 読み込みが完了した際のイベントハンドラ。imgのsrcにデータセット
        fileReader.onload = function(event) {
            // 読み込んだデータをimgに設定
            image.children('img.0').attr('src', event.target.result);
            // imgLiquid - imgの親要素に指定
            image.imgLiquid({fill: false});
        };

        // 画像読み込み
        fileReader.readAsDataURL(file);
    });
});

$(document).on('turbolinks:load', function(){
    $('.1').change(function(){
        if (!this.files.length) {
            return;
        }
        var file = this.files[0],           //画像１つのみ選択
            image = $('.1'),
            fileReader = new FileReader();

        // 読み込みが完了した際のイベントハンドラ。imgのsrcにデータセット
        fileReader.onload = function(event) {
            // 読み込んだデータをimgに設定
            image.children('img.1').attr('src', event.target.result);
            // imgLiquid - imgの親要素に指定
            image.imgLiquid({fill: false});
        };

        // 画像読み込み
        fileReader.readAsDataURL(file);
    });
});
$(document).on('turbolinks:load', function(){
    $('.2').change(function(){
        if (!this.files.length) {
            return;
        }
        var file = this.files[0],           //画像１つのみ選択
            image = $('.2'),
            fileReader = new FileReader();

        // 読み込みが完了した際のイベントハンドラ。imgのsrcにデータセット
        fileReader.onload = function(event) {
            // 読み込んだデータをimgに設定
            image.children('img.2').attr('src', event.target.result);
            // imgLiquid - imgの親要素に指定
            image.imgLiquid({fill: false});
        };

        // 画像読み込み
        fileReader.readAsDataURL(file);
    });
});