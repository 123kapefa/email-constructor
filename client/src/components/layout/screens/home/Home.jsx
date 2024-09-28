import Layout from '../../Layout.jsx'
import styles from "./Home.module.scss";
import React from "react";

export function Home() {
    return (
      <Layout>
      <div className={styles.home}>
				<h1>Главная страница</h1>
				<div>
					<p></p>
				</div>
			</div>
      </Layout>
      
    );
}