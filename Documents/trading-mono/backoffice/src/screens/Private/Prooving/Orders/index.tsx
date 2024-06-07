import { Copy, Input, Menus, Title } from '@/components'
import styles from './Orders.module.css'
import { ArrowRight, Circle, Edit2, Eye, Minus, Printer, Search, Trash } from 'react-feather'
import colors from '@/styles/colors'
import { DivisaFormater } from '@/utilities'

const Orders = () => {
    return (
        <Menus>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.items_header}>
                        <Title text='Orders' />
                        <Input type='search' icon={<Search color={colors.icon_color} size={26} />} placeholder='Search here' />
                    </div>
                    <div className={styles.orders_list}>
                        <div>
                            <h3>PROO32090148</h3>
                            <span>InAssembly</span><p>Bogota</p>
                        </div>
                        <div>
                            <h3>PROO32090148</h3>
                            <span>InAssembly</span><p>Bogota</p>
                        </div>
                        <div>
                            <h3>PROO32090148</h3>
                            <span>InAssembly</span><p>Bogota</p>
                        </div>
                        <div>
                            <h3>PROO32090148</h3>
                            <span>InAssembly</span><p>Bogota</p>
                        </div>
                    </div>
                </div>
                <div className={styles.overview}>
                    <div className={styles.overview_header}>
                        <Title text='Order Number' />
                        <Menus.Menu>
                            <Menus.Toggle id="4353fde-dfr3453" />

                            <Menus.List id="4353fde-dfr3453">
                                <Menus.Button><Eye size={16} /> Preview</Menus.Button>
                                <Menus.Button><Printer size={16} /> Print</Menus.Button>
                                <Menus.Button><Edit2 size={16} /> Edit</Menus.Button>
                                <Menus.Button><Trash size={16} /> Delete</Menus.Button>
                            </Menus.List>
                        </Menus.Menu>
                    </div>
                    <div className={styles.customer_info}>
                        <div>
                            <span>Sold by:</span>
                            <h4 className={styles.customer_name}>Nestor Mosquera</h4>
                            <Copy text='Medellin, Calle 31 # 65-19' />
                        </div>
                        <div className={styles.arrow}>
                            <Circle strokeWidth={2} size={15} />
                            <Minus strokeWidth={1} className={styles.null_arrow} />
                            <Minus strokeWidth={1} />
                            <Minus strokeWidth={1} />
                            <Minus strokeWidth={1} />
                            <Minus strokeWidth={1} />
                            <ArrowRight strokeWidth={1} />
                        </div>
                        <div>
                            <span>Customer:</span>
                            <h4 className={styles.customer_name}>Leslie Alexander</h4>
                            <Copy text='4517 Washington, Kenky' />
                        </div>
                    </div>

                    <div className={styles.package_info}>
                        <div>
                            <Copy text='Net Package Weight' />
                            <h3>35kg</h3>
                        </div>
                        <div>
                            <Copy text='Total Quantity' />
                            <h3>1 Package</h3>
                        </div>
                        <div>
                            <Copy text='Insurance' />
                            <h3>{DivisaFormater({ value: 80000 })}</h3>
                        </div>
                        <div></div>

                    </div>
                </div>
            </div>
        </Menus>
    )
}

export default Orders