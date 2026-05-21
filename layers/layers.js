var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_halte_pt_1 = new ol.format.GeoJSON();
var features_halte_pt_1 = format_halte_pt_1.readFeatures(json_halte_pt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_1.addFeatures(features_halte_pt_1);
var lyr_halte_pt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_1, 
                style: style_halte_pt_1,
                popuplayertitle: 'halte_pt',
                interactive: true,
    title: 'halte_pt<br />\
    <img src="styles/legend/halte_pt_1_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/halte_pt_1_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/halte_pt_1_2.png" /> Halte Basra<br />\
    <img src="styles/legend/halte_pt_1_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/halte_pt_1_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/halte_pt_1_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/halte_pt_1_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/halte_pt_1_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/halte_pt_1_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/halte_pt_1_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/halte_pt_1_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/halte_pt_1_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/halte_pt_1_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/halte_pt_1_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/halte_pt_1_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/halte_pt_1_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/halte_pt_1_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/halte_pt_1_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/halte_pt_1_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/halte_pt_1_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/halte_pt_1_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/halte_pt_1_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/halte_pt_1_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/halte_pt_1_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/halte_pt_1_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/halte_pt_1_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/halte_pt_1_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/halte_pt_1_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/halte_pt_1_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/halte_pt_1_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/halte_pt_1_30.png" /> Halte PMI<br />\
    <img src="styles/legend/halte_pt_1_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/halte_pt_1_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/halte_pt_1_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/halte_pt_1_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/halte_pt_1_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/halte_pt_1_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/halte_pt_1_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/halte_pt_1_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/halte_pt_1_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/halte_pt_1_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/halte_pt_1_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/halte_pt_1_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/halte_pt_1_43.png" /> Halte Yos Sudarso<br />' });
var format_HalteKecamatanGentenghalte_pt_2 = new ol.format.GeoJSON();
var features_HalteKecamatanGentenghalte_pt_2 = format_HalteKecamatanGentenghalte_pt_2.readFeatures(json_HalteKecamatanGentenghalte_pt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteKecamatanGentenghalte_pt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteKecamatanGentenghalte_pt_2.addFeatures(features_HalteKecamatanGentenghalte_pt_2);
var lyr_HalteKecamatanGentenghalte_pt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteKecamatanGentenghalte_pt_2, 
                style: style_HalteKecamatanGentenghalte_pt_2,
                popuplayertitle: 'Halte Kecamatan Genteng — halte_pt',
                interactive: true,
    title: 'Halte Kecamatan Genteng — halte_pt<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_2.png" /> Halte Basra<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_30.png" /> Halte PMI<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/HalteKecamatanGentenghalte_pt_2_43.png" /> Halte Yos Sudarso<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_halte_pt_1.setVisible(true);lyr_HalteKecamatanGentenghalte_pt_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_halte_pt_1,lyr_HalteKecamatanGentenghalte_pt_2];
lyr_halte_pt_1.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Reprojected_Halte_Nama_Halte': 'Reprojected_Halte_Nama_Halte', 'Reprojected_Halte_Keterangan': 'Reprojected_Halte_Keterangan', 'Reprojected_Halte_Sumber': 'Reprojected_Halte_Sumber', });
lyr_HalteKecamatanGentenghalte_pt_2.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Reprojected_Halte_Nama_Halte': 'Reprojected_Halte_Nama_Halte', 'Reprojected_Halte_Keterangan': 'Reprojected_Halte_Keterangan', 'Reprojected_Halte_Sumber': 'Reprojected_Halte_Sumber', 'Foto': 'Foto', });
lyr_halte_pt_1.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Reprojected_Halte_Nama_Halte': 'TextEdit', 'Reprojected_Halte_Keterangan': 'TextEdit', 'Reprojected_Halte_Sumber': 'TextEdit', });
lyr_HalteKecamatanGentenghalte_pt_2.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Reprojected_Halte_Nama_Halte': 'TextEdit', 'Reprojected_Halte_Keterangan': 'TextEdit', 'Reprojected_Halte_Sumber': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_halte_pt_1.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'Reprojected_Halte_Nama_Halte': 'no label', 'Reprojected_Halte_Keterangan': 'no label', 'Reprojected_Halte_Sumber': 'no label', });
lyr_HalteKecamatanGentenghalte_pt_2.set('fieldLabels', {'fid': 'no label', 'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'header label - visible with data', 'Reprojected_Halte_Nama_Halte': 'inline label - always visible', 'Reprojected_Halte_Keterangan': 'inline label - always visible', 'Reprojected_Halte_Sumber': 'header label - visible with data', 'Foto': 'header label - always visible', });
lyr_HalteKecamatanGentenghalte_pt_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});