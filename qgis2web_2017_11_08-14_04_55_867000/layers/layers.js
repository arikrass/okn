var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                source:jsonSource__0, 
                style: style__0,
    title: 'зона окн на территории<br />\
    <img src="styles/legend/_0_0.png" /> Муниципальное значение<br />\
    <img src="styles/legend/_0_1.png" /> Региональное значение<br />\
    <img src="styles/legend/_0_2.png" /> Федеральное значение<br />'
        });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                source:jsonSource__1, 
                style: style__1,
    title: 'Данные по последнему ремонту<br />\
    <img src="styles/legend/_1_0.png" /> 2008<br />\
    <img src="styles/legend/_1_1.png" /> 2009<br />\
    <img src="styles/legend/_1_2.png" /> 2010<br />\
    <img src="styles/legend/_1_3.png" /> 2011<br />\
    <img src="styles/legend/_1_4.png" /> 2012<br />\
    <img src="styles/legend/_1_5.png" /> 2013<br />\
    <img src="styles/legend/_1_6.png" /> 2014<br />\
    <img src="styles/legend/_1_7.png" /> 2015<br />\
    <img src="styles/legend/_1_8.png" /> 2016<br />'
        });

lyr__0.setVisible(true);lyr__1.setVisible(true);
var layersList = [baseLayer,lyr__0,lyr__1];
lyr__0.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'vid': 'Вид', 'osnovanie': 'osnovanie', 'kat_oxrany': 'Категория охраны', 'adres_poch': 'adres_poch', 'adres_okn': 'Адрес', 'naimen_ob': 'Наименование', 'nomer_rees': 'Кадастровый номер', 'data_izmen': 'data_izmen', 'Визуализац': 'Визуализац', });
lyr__1.set('fieldAliases', {'repdate': 'repdate', 'repjob': 'repjob', 'number': 'number', 'street': 'street', 'settlement': 'settlement', 'building_n': 'building_n', 'geocoded': 'geocoded', });
lyr__0.set('fieldImages', {'cartodb_id': 'Hidden', 'vid': 'Hidden', 'osnovanie': 'Hidden', 'kat_oxrany': 'Hidden', 'adres_poch': 'Hidden', 'adres_okn': 'TextEdit', 'naimen_ob': 'TextEdit', 'nomer_rees': 'TextEdit', 'data_izmen': 'Hidden', 'Визуализац': 'Hidden', });
lyr__1.set('fieldImages', {'repdate': 'TextEdit', 'repjob': 'TextEdit', 'number': 'Hidden', 'street': 'Hidden', 'settlement': 'Hidden', 'building_n': 'Hidden', 'geocoded': 'Hidden', });
lyr__0.set('fieldLabels', {'adres_okn': 'no label', 'naimen_ob': 'no label', 'nomer_rees': 'no label', });
lyr__1.set('fieldLabels', {'repdate': 'no label', 'repjob': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr__1.on("postcompose", update);

    var listenerKey = lyr__1.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });