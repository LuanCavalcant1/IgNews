import React from 'react'
import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceID: string;
    amount: number;
  }
}

export default function Home({product}:HomeProps) {
  return (
    <>
    <Head>
    <title>IgNews</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
      <span>👏 Hey, wellcome</span>
      <h1>News about the <span>React</span> world.</h1>
      <p>
        Get acess to all the plubications <br/>
        <span>For {product.amount} month</span>
      </p>
      <SubscribeButton priceId={product.priceID}/>
      </section>
      <img src="/image/photo.png.png" alt="girl coding" />
    </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LsN2cJhSMixIBm7yclYFxX8')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency:'USD',
    }).format(price.unit_amount / 100)
  }
  
  return {
    props:{
      product,
    },
    revalidate: 60 * 60 * 24, //24 horas
  }
}