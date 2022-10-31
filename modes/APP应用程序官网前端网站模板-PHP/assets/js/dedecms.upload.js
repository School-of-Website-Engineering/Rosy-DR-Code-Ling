"use strict";

let albumIdData = [];
let albumUploadData = [];

// 页面加载完成
$(document).ready(function () {
    dedecmsAlbumDataUpdate();
});

// 图集 删除
function dedecmsAlbumDelete(that) {
    $(that).parent().parent().parent().parent().remove();
}

// 图集 编辑
function dedecmsAlbumEdit(that) {
    let files = $(that).prop("files");

    if (files) {
        let file = files[0];

        if (file === undefined) {
            return;
        }

        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
            let reader = new FileReader();

            reader.onload = function () {
                let img = $(that).next();
                let input = $(that).parent().next().children().children("input");
                let src = this.result;
                let remark = file.name.substring(0, file.name.lastIndexOf("."));

                img.attr("src", src);
                input.val(remark);
                input.attr("value", input.val());
            }

            reader.readAsDataURL(file);
        }
    }
}

// 图集 移动
UIkit.util.on(document, "moved", "#dedecms-album", function (item) {
    dedecmsAlbumDataUpdate();
});

// 图集 数据更新
function dedecmsAlbumDataUpdate() {
    let albumIds = $("#dedecms-album-ids");

    albumIdData = [];
    $(".dedecms-album-id").each(function () {
        let id = $(this).attr("id");
        id = id.replace("albumId", "");

        if (albumIdData.indexOf(id) === -1) {
            albumIdData.push(id);
        }
    });

    albumIds.val(JSON.stringify(albumIdData));
}

// 图集 预览
function dedecmsAlbumPreview(that) {
    let files = $(that).prop("files");
    let albumPreview = $("#dedecms-album-preview");
    let albumUploadFiles = $("#dedecms-album-upload-files");

    if (files) {
        $.each(files, function (i, file) {
            if (file === undefined) {
                return;
            }

            if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                let reader = new FileReader();

                reader.onload = function () {
                    let timestamp = (new Date()).valueOf();
                    let id = "" + timestamp + random(1000, 9999);
                    let src = this.result;
                    let remark = file.name.substring(0, file.name.lastIndexOf("."));

                    let html = `
                    <div class="dedecms-album-preview-id" id="${id}">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-header uk-padding-small">
                                <div class="uk-flex uk-flex-between">
                                    <span class="uk-sortable-handle" uk-icon="icon: arrows-move"></span>
                                    <button type="button" uk-close onclick="dedecmsAlbumPreviewDelete(this)"></button>
                                </div>
                            </div>
                            <div class="uk-card-body uk-padding-remove uk-text-center" uk-form-custom>
                                <input type="file" accept="image/*" onchange="dedecmsAlbumPreviewEdit(this)">
                                <img class="uk-height-small dedecms-album-preview-src" src="${src}">
                                <div>点击图片进行修改</div>
                            </div>
                            <div class="uk-card-footer uk-padding-small">
                                <div class="uk-flex uk-flex-middle">
                                    <label class="uk-form-label uk-width-auto uk-margin-small-right">注释</label>
                                    <input class="uk-input uk-form-small uk-width-expand dedecms-album-preview-remark" type="text" value="${remark}" onkeyup="dedecmsAlbumPreviewEdit(this)">
                                </div>
                            </div>
                        </div>
                    </div>`;

                    albumPreview.append(html);

                    albumUploadData.push({
                        "id"     : id,
                        "src"    : src,
                        "remark" : remark
                    });

                    albumUploadFiles.val(JSON.stringify(albumUploadData));
                }

                reader.readAsDataURL(file);
            }
        });
    }

    $(that).val("");
}

// 图集 预览 删除
function dedecmsAlbumPreviewDelete(that) {
    let div = $(that).parent().parent().parent().parent();
    let id = div.attr("id");
    let albumUploadFiles = $("#dedecms-album-upload-files");

    albumUploadData = objArrayRemove(albumUploadData, "id", id);

    albumUploadFiles.val(JSON.stringify(albumUploadData));

    div.remove();
}

// 图集 预览 编辑
function dedecmsAlbumPreviewEdit(that) {
    let files = $(that).prop("files");

    if (files) {
        let file = files[0];

        if (file === undefined) {
            return;
        }

        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
            let reader = new FileReader();

            reader.onload = function () {
                let img = $(that).next();
                let input = $(that).parent().next().children().children("input");
                let src = this.result;
                let remark = file.name.substring(0, file.name.lastIndexOf("."));

                img.attr("src", src);
                input.val(remark);
                input.attr("value", input.val());

                dedecmsAlbumUploadDataUpdate();

                $(that).val("");
            }

            reader.readAsDataURL(file);
        }
    } else {
        $(that).attr("value", $(that).val());

        dedecmsAlbumUploadDataUpdate();
    }
}

// 图集 预览 移动
UIkit.util.on(document, "moved", "#dedecms-album-preview", function (item) {
    dedecmsAlbumUploadDataUpdate();
});

// 图集 上传数据更新
function dedecmsAlbumUploadDataUpdate() {
    let id = [];
    let src = [];
    let remark = [];
    let albumUploadDataLength = albumUploadData.length;
    let albumUploadFiles = $("#dedecms-album-upload-files");

    $(".dedecms-album-preview-id").each(function () {
        id.push($(this).attr("id"));
    });
    $(".dedecms-album-preview-src").each(function () {
        src.push($(this).attr("src"));
    });
    $(".dedecms-album-preview-remark").each(function () {
        remark.push($(this).val());
    });

    albumUploadData = [];
    for (let i = 0; i < id.length; i++) {
        albumUploadData.push({
            "id"     : id[i],
            "src"    : src[i],
            "remark" : remark[i]
        });

        if (i + 1 >= albumUploadDataLength) {
            break;
        }
    }

    albumUploadFiles.val(JSON.stringify(albumUploadData));
}