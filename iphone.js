/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var res = [];

res.i3 = {};
res.i3.x = 1;
//res.i3gs = {};
res.i3.widthPT = 320;
res.i3.heightPT = 480;
//res.i3.widthPX = 320;
//res.i3.heightPX = 480;
//res.i3gs = res.i3;


res.i4 = {};
res.i4.x = 2;
res.i4s = {};
//res.i4.widthPX = 640;
//res.i4.heightPX = 960;
res.i4.widthPT = 320;
res.i4.heightPT = 480;
//res.i4s = res.i4;

res.i5 = {};
res.i5.x = 2;
res.i5s = {};
res.i5c = {};
//res.i5.widthPX = 640;
//res.i5.heightPX = 1136;
res.i5.widthPT = 320;
res.i5.heightPT = 568;
//res.i5s = res.i5;
//res.i5c = res.i5;

res.i6 = {};
res.i6.x = 2;
res.i6.widthPT = 375;
res.i6.heightPT = 667;
//res.i6.widthPX = 750;
//res.i6.heightPX = 1334;

res.i6p = {};
res.i6p.x = 3;
res.i6p.widthPT = 414;
res.i6p.heightPT = 736;
//res.i6p.widthPX = 1242;
//res.i6p.heightPX = 2208;

function Calc() {
    var round = "false";
    if ($('input[name="round"]:checked').val() === "round")
    {
        round = "true";
    }
    var aspectratio = $('#aspectratio').is(':checked');
    var width = $('#width').val();
    var height = $('#height').val();
    var phone = $('#phone').val();
    var whichtokeep = $('input[name="whattokeep"]:checked').val();
    if (aspectratio === true && whichtokeep === "width") {
        $('#i3w').val((width / res["i" + phone].widthPT) * res.i3.widthPT);
        $('#i3h').val((width / res["i" + phone].widthPT) * res.i3.widthPT * height / width);
        $('#i3wp').val((width / res["i" + phone].widthPT) * res.i3.widthPT * res.i3.x);
        $('#i3hp').val((width / res["i" + phone].widthPT) * res.i3.widthPT * height / width * res.i3.x);
        $('#i4w').val((width / res["i" + phone].widthPT) * res.i4.widthPT);
        $('#i4h').val((width / res["i" + phone].widthPT) * res.i4.widthPT * height / width);
        $('#i4wp').val((width / res["i" + phone].widthPT) * res.i4.widthPT * res.i4.x);
        $('#i4hp').val((width / res["i" + phone].widthPT) * res.i4.widthPT * height / width * res.i4.x);
        $('#i5w').val((width / res["i" + phone].widthPT) * res.i5.widthPT);
        $('#i5h').val((width / res["i" + phone].widthPT) * res.i5.widthPT * height / width);
        $('#i5wp').val((width / res["i" + phone].widthPT) * res.i5.widthPT * res.i5.x);
        $('#i5hp').val((width / res["i" + phone].widthPT) * res.i5.widthPT * height / width * res.i5.x);
        $('#i6w').val((width / res["i" + phone].widthPT) * res.i6.widthPT);
        $('#i6h').val((width / res["i" + phone].widthPT) * res.i6.widthPT * height / width);
        $('#i6wp').val((width / res["i" + phone].widthPT) * res.i6.widthPT * res.i6.x);
        $('#i6hp').val((width / res["i" + phone].widthPT) * res.i6.widthPT * height / width * res.i6.x);
        $('#i6pw').val((width / res["i" + phone].widthPT) * res.i6p.widthPT);
        $('#i6ph').val((width / res["i" + phone].widthPT) * res.i6p.widthPT * height / width);
        $('#i6pwp').val((width / res["i" + phone].widthPT) * res.i6p.widthPT * res.i6p.x);
        $('#i6php').val((width / res["i" + phone].widthPT) * res.i6p.widthPT * height / width * res.i6p.x);
    } else if (aspectratio === true && whichtokeep === "height")
    {
        $('#i3w').val((width / res["i" + phone].heightPT) * res.i3.heightPT);
        $('#i3h').val((width / res["i" + phone].heightPT) * res.i3.heightPT * height / width);
        $('#i3wp').val((width / res["i" + phone].heightPT) * res.i3.heightPT * res.i3.x);
        $('#i3hp').val((width / res["i" + phone].heightPT) * res.i3.heightPT * height / width * res.i3.x);
        $('#i4w').val((width / res["i" + phone].heightPT) * res.i4.heightPT);
        $('#i4h').val((width / res["i" + phone].heightPT) * res.i4.heightPT * height / width);
        $('#i4wp').val((width / res["i" + phone].heightPT) * res.i4.heightPT * res.i4.x);
        $('#i4hp').val((width / res["i" + phone].heightPT) * res.i4.heightPT * height / width * res.i4.x);
        $('#i5w').val((width / res["i" + phone].heightPT) * res.i5.heightPT);
        $('#i5h').val((width / res["i" + phone].heightPT) * res.i5.heightPT * height / width);
        $('#i5wp').val((width / res["i" + phone].heightPT) * res.i5.heightPT * res.i5.x);
        $('#i5hp').val((width / res["i" + phone].heightPT) * res.i5.heightPT * height / width * res.i5.x);
        $('#i6w').val((width / res["i" + phone].heightPT) * res.i6.heightPT);
        $('#i6h').val((width / res["i" + phone].heightPT) * res.i6.heightPT * height / width);
        $('#i6wp').val((width / res["i" + phone].heightPT) * res.i6.heightPT * res.i6.x);
        $('#i6hp').val((width / res["i" + phone].heightPT) * res.i6.heightPT * height / width * res.i6.x);
        $('#i6pw').val((width / res["i" + phone].heightPT) * res.i6p.heightPT);
        $('#i6ph').val((width / res["i" + phone].heightPT) * res.i6p.heightPT * height / width);
        $('#i6pwp').val((width / res["i" + phone].heightPT) * res.i6p.heightPT * res.i6p.x);
        $('#i6php').val((width / res["i" + phone].heightPT) * res.i6p.heightPT * height / width * res.i6p.x);
    }
    else if (aspectratio === false)
    {
        $('#i3w').val((width / res["i" + phone].widthPT) * res.i3.widthPT);
        $('#i3h').val((height / res["i" + phone].heightPT) * res.i3.heightPT);
        $('#i3wp').val((width / res["i" + phone].widthPT) * res.i3.widthPT * res.i3.x);
        $('#i3hp').val((height / res["i" + phone].heightPT) * res.i3.heightPT * res.i3.x);
        $('#i4w').val((width / res["i" + phone].widthPT) * res.i4.widthPT);
        $('#i4h').val((height / res["i" + phone].heightPT) * res.i4.heightPT);
        $('#i4wp').val((width / res["i" + phone].widthPT) * res.i4.widthPT * res.i4.x);
        $('#i4hp').val((height / res["i" + phone].heightPT) * res.i4.heightPT * res.i4.x);
        $('#i5w').val((width / res["i" + phone].widthPT) * res.i5.widthPT);
        $('#i5h').val((height / res["i" + phone].heightPT) * res.i5.heightPT);
        $('#i5wp').val((width / res["i" + phone].widthPT) * res.i5.widthPT * res.i5.x);
        $('#i5hp').val((height / res["i" + phone].heightPT) * res.i5.heightPT * res.i5.x);
        $('#i6w').val((width / res["i" + phone].widthPT) * res.i6.widthPT);
        $('#i6h').val((height / res["i" + phone].heightPT) * res.i6.heightPT);
        $('#i6wp').val((width / res["i" + phone].widthPT) * res.i6.widthPT * res.i6.x);
        $('#i6hp').val((height / res["i" + phone].heightPT) * res.i6.heightPT * res.i6.x);
        $('#i6pw').val((width / res["i" + phone].widthPT) * res.i6p.widthPT);
        $('#i6ph').val((height / res["i" + phone].heightPT) * res.i6p.heightPT);
        $('#i6pwp').val((width / res["i" + phone].widthPT) * res.i6p.widthPT * res.i6p.x);
        $('#i6php').val((height / res["i" + phone].heightPT) * res.i6p.heightPT * res.i6p.x);
    }
    if (height >= 1 && width >= 0) {
        resizeImage();
    }
    if (round === "true")
    {
        $('#i3w').val(Math.round($('#i3w').val()));
        $('#i3h').val(Math.round($('#i3h').val()));
        $('#i3wp').val(Math.round($('#i3wp').val()));
        $('#i3hp').val(Math.round($('#i3hp').val()));
        $('#i4w').val(Math.round($('#i4w').val()));
        $('#i4h').val(Math.round($('#i4h').val()));
        $('#i4wp').val(Math.round($('#i4wp').val()));
        $('#i4hp').val(Math.round($('#i4hp').val()));
        $('#i5w').val(Math.round($('#i5w').val()));
        $('#i5h').val(Math.round($('#i5h').val()));
        $('#i5wp').val(Math.round($('#i5wp').val()));
        $('#i5hp').val(Math.round($('#i5hp').val()));
        $('#i6w').val(Math.round($('#i6w').val()));
        $('#i6h').val(Math.round($('#i6h').val()));
        $('#i6wp').val(Math.round($('#i6wp').val()));
        $('#i6hp').val(Math.round($('#i6hp').val()));
        $('#i6pw').val(Math.round($('#i6pw').val()));
        $('#i6ph').val(Math.round($('#i6ph').val()));
        $('#i6pwp').val(Math.round($('#i6pwp').val()));
        $('#i6php').val(Math.round($('#i6php').val()));
    } else {
        $('#i3w').val(Math.round($('#i3w').val() * 100) / 100);
        $('#i3h').val(Math.round($('#i3h').val() * 100) / 100);
        $('#i3wp').val(Math.round($('#i3wp').val() * 100) / 100);
        $('#i3hp').val(Math.round($('#i3hp').val() * 100) / 100);
        $('#i4w').val(Math.round($('#i4w').val() * 100) / 100);
        $('#i4h').val(Math.round($('#i4h').val() * 100) / 100);
        $('#i4wp').val(Math.round($('#i4wp').val() * 100) / 100);
        $('#i4hp').val(Math.round($('#i4hp').val() * 100) / 100);
        $('#i5w').val(Math.round($('#i5w').val() * 100) / 100);
        $('#i5h').val(Math.round($('#i5h').val() * 100) / 100);
        $('#i5wp').val(Math.round($('#i5wp').val() * 100) / 100);
        $('#i5hp').val(Math.round($('#i5hp').val() * 100) / 100);
        $('#i6w').val(Math.round($('#i6w').val() * 100) / 100);
        $('#i6h').val(Math.round($('#i6h').val() * 100) / 100);
        $('#i6wp').val(Math.round($('#i6wp').val() * 100) / 100);
        $('#i6hp').val(Math.round($('#i6hp').val() * 100) / 100);
        $('#i6pw').val(Math.round($('#i6pw').val() * 100) / 100);
        $('#i6ph').val(Math.round($('#i6ph').val() * 100) / 100);
        $('#i6pwp').val(Math.round($('#i6pwp').val() * 100) / 100);
        $('#i6php').val(Math.round($('#i6php').val() * 100) / 100);
    }
}
$('#width').change(Calc);
$('#height').change(Calc);

function createCanvasContext(width, height)
{
    var canvas = document.createElement("canvas");
    canvas.height = height;
    canvas.width = width;
    var context = canvas.getContext('2d');
    $('#imagecontainer').append(canvas);
    $('#imagecontainer').append(" ");
    return context;
}

function downloadp() {
    var dt1 = $('canvas')[0].toDataURL("image/png");
    var dt2 = $('canvas')[1].toDataURL("image/png");
    var dt3 = $('canvas')[2].toDataURL("image/png");
    var dt4 = $('canvas')[3].toDataURL("image/png");
    var dt5 = $('canvas')[4].toDataURL("image/png");

    var zip = new JSZip();
    var filename = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
    filename = filename.substring(0, filename.length - 4);

    zip.file(filename + ".png", dt1.substring(22), {base64: true});
    zip.file(filename + "~4@2x.png", dt2.substring(22), {base64: true});
    zip.file(filename + "~5@2x.png", dt3.substring(22), {base64: true});
    zip.file(filename + "~6@2x.png", dt4.substring(22), {base64: true});
    zip.file(filename + "@3x.png", dt5.substring(22), {base64: true});

    var content = zip.generate({type: "blob"});
    saveAs(content, "images.zip");

    //this.href = content; //this may not work in the future..
}

function downloadj() {

    var dt1 = $('canvas')[0].toDataURL("image/jpeg");
    var dt2 = $('canvas')[1].toDataURL("image/jpeg");
    var dt3 = $('canvas')[2].toDataURL("image/jpeg");
    var dt4 = $('canvas')[3].toDataURL("image/jpeg");
    var dt5 = $('canvas')[4].toDataURL("image/jpeg");

    var zip = new JSZip();
    var filename = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
    filename = filename.substring(0, filename.length - 4);

    zip.file(filename + ".jpg", dt1.substring(23), {base64: true});
    zip.file(filename + "~4@2x.jpg", dt2.substring(23), {base64: true});
    zip.file(filename + "~5@2x.jpg", dt3.substring(23), {base64: true});
    zip.file(filename + "~6@2x.jpg", dt4.substring(23), {base64: true});
    zip.file(filename + "@3x.jpg", dt5.substring(23), {base64: true});

    var content = zip.generate({type: "blob"});
    saveAs(content, "images.zip");
}

function resizeImage() {

    res.r1x = $('#i3wp').val();
    res.r1y = $('#i3hp').val();
    res.r2x = $('#i4wp').val();
    res.r2y = $('#i4hp').val();
    res.r3x = $('#i5wp').val();
    res.r3y = $('#i5hp').val();
    res.r4x = $('#i6wp').val();
    res.r4y = $('#i6hp').val();
    res.r5x = $('#i6pwp').val();
    res.r5y = $('#i6php').val();

    var Obj = document.querySelector('#himage');//Obj is an image

    $('#imagecontainer').html("<br><a id='downloadj' class='btn btn-success' download='images.zip'>Download as zip (jpg format)</a> <a id='downloadp' class='btn btn-success' download='images.zip'>Download as zip (png format)</a><br>");

    var ctx1 = createCanvasContext(Math.round(res.r1x), Math.round(res.r1y));
    var ctx2 = createCanvasContext(Math.round(res.r2x), Math.round(res.r2y));
    var ctx3 = createCanvasContext(Math.round(res.r3x), Math.round(res.r3y));
    var ctx4 = createCanvasContext(Math.round(res.r4x), Math.round(res.r4y));
    var ctx5 = createCanvasContext(Math.round(res.r5x), Math.round(res.r5y));

    ctx1.drawImage(Obj, 0, 0, Math.round(res.r1x), Math.round(res.r1y));
    ctx2.drawImage(Obj, 0, 0, Math.round(res.r2x), Math.round(res.r2y));
    ctx3.drawImage(Obj, 0, 0, Math.round(res.r3x), Math.round(res.r3y));
    ctx4.drawImage(Obj, 0, 0, Math.round(res.r4x), Math.round(res.r4y));
    ctx5.drawImage(Obj, 0, 0, Math.round(res.r5x), Math.round(res.r5y));

    document.getElementById('downloadj').addEventListener('click', downloadj, false);
    document.getElementById('downloadp').addEventListener('click', downloadp, false);
}

$(document).ready(function () {
});
function switchaspect() {
    if (this.checked) {
        $("#chb1").removeAttr("disabled");
        $("#chb2").removeAttr("disabled");
    } else {
        $("#chb1").attr("disabled", true);
        $("#chb2").attr("disabled", true);
    }
    Calc();
}
$('#aspectratio').change(switchaspect);
function previewFile() {
    var file = document.querySelector('input[type=file]').files[0];
    var preview = document.querySelector('#himage'); //selects the query named img
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
        resizeImage();
    };

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}
previewFile();
