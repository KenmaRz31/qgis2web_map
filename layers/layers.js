var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: false,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_highway_4 = new ol.format.GeoJSON();
var features_highway_4 = format_highway_4.readFeatures(json_highway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_4.addFeatures(features_highway_4);
var lyr_highway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_4, 
                style: style_highway_4,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_4.png" /> highway'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_highway_4.setVisible(true);lyr_highway_5.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_building_house_3,lyr_highway_4,lyr_highway_5];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'crossing': 'crossing', 'noexit': 'noexit', 'maxspeed': 'maxspeed', 'crossing_ref': 'crossing_ref', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'int_ref': 'int_ref', 'barrier': 'barrier', 'railway': 'railway', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'smoothness': 'smoothness', 'tracktype': 'tracktype', 'surface': 'surface', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', 'int_ref': 'int_ref', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_highway_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ford': '', 'crossing': '', 'noexit': '', 'maxspeed': '', 'crossing_ref': '', 'public_transport': '', 'name': '', 'bus': '', 'int_ref': '', 'barrier': '', 'railway': '', });
lyr_highway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'service': '', 'motor_vehicle': '', 'horse': '', 'smoothness': '', 'tracktype': '', 'surface': '', 'ref': '', 'old_ref': '', 'name': '', 'maxspeed': '', 'lit': '', 'lanes': '', 'int_ref': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ford': 'no label', 'crossing': 'no label', 'noexit': 'no label', 'maxspeed': 'no label', 'crossing_ref': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'int_ref': 'no label', 'barrier': 'no label', 'railway': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'smoothness': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', 'int_ref': 'no label', });
lyr_highway_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});