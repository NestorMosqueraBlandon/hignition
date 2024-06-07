import { PDFDownloadLink } from '@react-pdf/renderer'
import styles from './Quote.module.css'
import { useState } from 'react'
import { Breadcrumbs, Button, Field, Input, Loader } from '@/components'
import Nevobit from '@/containers/Invoices/Nevobit'
import { Calendar, Clock, DollarSign, User, X } from 'react-feather'
import { Container } from '@/containers'
import { useArrayState } from '@/hooks'

const NevoQuote = () => {
    let curr = new Date();
    curr.setDate(curr.getDate());
    let date_today = curr.toISOString().substring(0, 10);
    const [items, { add, remove, edit }] = useArrayState<string>([]);

    const [quote, setQuote] = useState<any>({
        code: '',
        client: '',
        price: 0,
        time: '',
        type: 'quote',
        date: date_today,
        items: items
    });

    const setHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setQuote((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))
    };
    const setHandlerItems = (item: any, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        edit(item, e.target.value)
        setQuote((prev: any) => ({ ...prev, items: items }))
    };
    return (
        <Container>
            <Breadcrumbs items={['Main', 'Nevobit', 'New Quote']} />
            <div className={styles.options}>
                <PDFDownloadLink
                    document={
                        <Nevobit
                            {...quote}
                        />
                    }
                    fileName={`${quote.code}.pdf`}
                >
                    {({ loading }) =>
                        loading ? <div style={{
                            width: 150,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}><Loader small={true} /></div> : <Button variant="third">Download PDF</Button>
                    }
                </PDFDownloadLink>
                <Button size='sm' className="primary">Download and Save</Button>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_item}>
                    <Field label="Type">
                        <select name="type" onChange={(e) => setHandler(e)}>
                            <option value="quote">Quote</option>
                            <option value="invoice">Invoice</option>
                        </select>
                    </Field>
                </div>
                <div className={styles.card_item}>
                    <Field label="Client">
                        <Input icon={<User size={28} />} name="client" value={quote.client} onChange={(e) => setHandler(e)} />
                    </Field>
                </div>
                <div className={styles.card_item}>
                    <Field label="Time">
                        <Input icon={<Clock size={28} />} name='time' value={quote.time} onChange={(e) => setHandler(e)} />
                    </Field>
                </div>
                <div className={styles.card_item}>
                    <Field label="Date">
                        <Input icon={<Calendar size={28} />} type="date" value={quote.date} readOnly onChange={(e) => setHandler(e)} />
                    </Field>
                </div>
                <div className={styles.card_item}>
                    <Field label="Price">
                        <Input icon={<DollarSign size={28} />} name='price' type="number" value={quote.price} onChange={(e) => setHandler(e)} />
                    </Field>
                </div>
            </div>
            <div className={`${styles.card_content_list} ${styles.padding_top}`}>
                <div className={styles.card_item}>
                    <h3>Activities</h3>
                    <div>

                        {items.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <Input onChange={(e) => setHandlerItems(item, e)} />
                                <Button size='sm' variant='danger' onClick={() => remove(item)} > <X size={20} /> </Button>
                            </div>
                        ))}
                    </div>

                </div>
                <Button onClick={() => add('')} variant='secondary' size='sm'>Add</Button>
            </div>

        </Container>
    )
}

export default NevoQuote
