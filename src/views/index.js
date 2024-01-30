import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { style } from "../styles/style";

const data = [
    {name : 'Acuario',
        time : 'Del 21 de enero hasta el 19 de febrero',
        element  : 'Fuego',
        luminary : 'Crisocola',
        stone: 'Turquesa',
        image: require('../images/01_Acuario.png')},
    {name : 'Piscis',
        time : 'Fundamentos de Programación',
        element  : 1,
        luminary : 6,
        stone: 'Piedra dura',
        image: require('../images/02_Pisis.png')},
    {name : 'Aries',
        time : 'Del 21 de marzo hasta el 20 de abril',
        element  : 'Fuego',
        luminary : 'Ojo de tigre',
        stone: 'Amatista',
        image: require('../images/03_Aries.png')},
    {name : 'Tauro',
        time : 'Del 21 de abril hasta el 21 de mayo',
        element  : 'Agua',
        luminary : 'Venturina',
        stone: 'Cuarzo rosa',
        image: require('../images/04_Tauro.png')},
    {name : 'Geminis',
        time : 'Del 21 de mayo hasta el 21 de junio',
        element  : 'Aire',
        luminary : 'Arenosos',
        stone: 'Ambar',
        image: require('../images/05_Geminis.png')},
    {name : 'Cancer',
        time : 'Del 22 de junio hasta el 22 de julio',
        element  : 'Agua',
        luminary : 'Rodonita',
        stone: 'Carniola',
        image: require('../images/06_Cancer.png')},
    {name : 'Leo',
        time : 'Del 23 de julio hasta el 23 de agosto',
        element  : 'Fuego',
        luminary : 'Ojo de tigre',
        stone: 'Citrina',
        image: require('../images/07_Leo.png')},
    {name : 'Virgo',
        time : 'Del 24 de agosto hasta el 22 de septiembre',
        element  : 'Tierra',
        luminary : 'Sodalita',
        stone: 'Amatista',
        image: require('../images/08_Virgo.png')},
    {name : 'Libra',
        time : 'Del 23 de septiembre hasta el 22 de octubre',
        element  : 'Aire',
        luminary : 'Crisocola',
        stone: 'Lapislazuli',
        image: require('../images/09_Libra.png')},
    {name : 'Escorpio',
        time : 'Del 25 de octubre hasta el 22 de noviembre',
        element  : 'Agua',
        luminary : 'Fluorita',
        stone: 'Agata',
        image: require('../images/10_Escorpio.png')},
    {name : 'Sagitario',
        time : 'Del 23 de noviembre hasta el 23 de diciembre',
        element  : 'Fuego',
        luminary : 'Azurita',
        stone: 'Malaquita',
        image: require('../images/11_Sagitario.png')},
    {name : 'Capricornio',
        time : 'Del 22 de diciembre hasta el 19 de enero',
        element  : 'Tierra',
        luminary : 'Jaspe',
        stone: 'Dumortierita',
        image: require('../images/12_Capricornio.png')},
];

const Index = () => {
    return (
        <View>
            <View style={style.divMain}>

                <ScrollView style={{ marginTop: 8 }}>
                    {data.map(item => (
                        <View style={style.tarjeta} key={item.name}>
                            
                            <Image
                                source={Platform.OS === 'android' ? item.image : {uri: item.image}}
                                style={[style.imagenSigno, { width: 80, height: 80 }]}
                            />
                            <View style={style.textoSigno}>
                                <Text>Nombre: {item.name}</Text>
                                <Text>Fecha: {item.time}</Text>
                                <Text>Signo: {item.element}</Text>
                                <Text>Astro celeste: {item.luminary}</Text>
                                <Text>Piedra preciosa: {item.stone}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={style.divFooter}>
                <Text style={style.textFooter}>Carrera de Tecnologías del Zodiaco</Text>
                <Text style={style.textFooter}>Sede del Pacífico</Text>
            </View>
        </View>
    );
}

export default Index;