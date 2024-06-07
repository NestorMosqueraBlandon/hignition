import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './Nevobit.module';
import { DivisaFormater } from '@/utilities/divisa-formater';

interface Props {
    name?: string;
    city?: string;
    phone?: string;
    date?: string;
    due?: string;
    specs?: any;
    canvasRef: any;
    client: string;
    price: number;
    time: string;
    items: string[];
    type: string;
}

const Nevobit = ({client, date, price, type, items, time}: Props) => {
    return (
        <Document>
            <Page size="EXECUTIVE" style={styles.page}>
                <View style={styles.header}>
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                            }}
                        >
                            {type == 'quote'? 'Cotización': 'Cuenta de cobro'}
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Helvetica-Bold',
                            }}
                        >
                            {client}
                        </Text>
                     {type != 'quote' && (
                            <>
                         <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Nit: 900011707
                        </Text> 
                         <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Telefono: 3176430481
                        </Text> 
                         <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Direccion: Calle 11B #40-47 Int 602 ED Ardilleros de Lalinde
                        </Text> 
                        <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Correo: dexins@hotmail.com
                        </Text> 
                        </>

                        )} 
                    </View>

                    <Text
                        style={{
                            fontSize: 12,
                            color: 'rgba(0,0,0,0.5)',
                        }}
                    >
                        {date}
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 40,
                        fontSize: 13,
                        fontWeight: 'thin',
                        color: 'rgba(0,0,0,0.8)',
                    }}
                >
                    Reciban un cordial saludo, en la presente encontrará el detalle de las actividades {type == ' quote'? 'a realizar': 'realizadas'}.
                </Text>

                <View
                    style={{
                        marginTop: 30,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: 2,
                        padding: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Helvetica-Bold',
                            fontSize: 14,
                        }}
                    >
                        Actividades
                    </Text>
                    <Text
                        style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontSize: 12,
                        }}
                    >
                        Tiempo estimado:{' '}
                        <Text
                            style={{
                                fontFamily: 'Helvetica-Bold',
                            }}
                        >
                            {time}
                        </Text>
                    </Text>
                </View>

                <View
                    style={{
                        paddingVertical: 15,
                        paddingHorizontal: 10,
                    }}
                >
                    {items.map((item) => (

                  <View key={item} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginHorizontal: 6 }}>•</Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: 'rgba(0,0,0,0.7)',
                            }}
                        >
                            {item}
                        </Text>
                    </View>
                    ))}

                 
                </View>
                <View
                    style={{
                        marginTop: 15,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        borderRadius: 2,
                        padding: 10,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontFamily: 'Helvetica-Bold',
                                fontSize: 14,
                            }}
                        >
                            Total
                        </Text>
                    </View>

                    <Text
                        style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontSize: 12,
                        }}
                    >
                        {DivisaFormater({value: price})}
                    </Text>
                </View>
                
                <View style={{
                 height: 1,
                 width: '100%',
                 backgroundColor: 'rgba(0,0,0,0.1)',
                 marginVertical: 15
                }}></View>
                
                <Text style={{
                 fontSize: 12,
                 marginBottom: 10,
                 fontFamily: 'Helvetica-Bold',
                }} >Terminos del servicio:</Text>
                <Text style={{
                 fontSize: 12,
                 marginBottom: 10,
                 fontFamily: 'Helvetica-Bold',
                 color: 'rgba(0,0,0,0.8)',
                }} >Referente al pago: <Text style={{
                 color: 'rgba(0,0,0,0.7)',
                 fontFamily: 'Helvetica'
                }}>50% Inicial - 50% al terminar</Text></Text>
                <Text style={{
                 fontSize: 12,
                 marginBottom: 10,
                 fontFamily: 'Helvetica-Bold',
                 color: 'rgba(0,0,0,0.8)',
                }} >Referente a tiempo de entrega: <Text style={{
                 color: 'rgba(0,0,0,0.7)',
                 fontFamily: 'Helvetica',
                 lineHeight: 1.5
                }}>
                El tiempo total que {type == 'quote'? 'tomará': 'tomó'} la elaboración de todas
las actividades {type == 'quote'? 'será': 'fue'} de {time}, {type == 'quote' && 'pero puede variar según cambios o correcciones recibidas por el cliente, además de los tiempos que tarde el cliente en aprobar, suministrar o revisar los entregables.'}
</Text> 
                 </Text>
                 <View>
                 {type !== 'quote' && (
                        <>
                         <Text
                            style={{
                                fontSize: 16,
                                fontFamily: 'Helvetica-Bold',
                            }}
                        >
                            Cotización 
                            Reponsable
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                            }}
                        >
                            Nestor Estiwar Mosquera Blandon
                        </Text>
                        <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            1152472328
                        </Text>
                        <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Telefono: 3226589914
                        </Text>
                        <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Direccion: Calle 31 # 65-19
                        </Text>
                        <Text
                            style={{
                                fontSize: 12
                            }}
                        >
                            Correo: nevobitsoftware@gmail.com
                        </Text> 
                        </>

                 )}

                    </View>
            </Page>
        </Document>
    );
};

export default Nevobit;
