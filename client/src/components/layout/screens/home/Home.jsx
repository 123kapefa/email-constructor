import Layout from '../../Layout.jsx'
import styles from "./Home.module.scss";
import React from "react";

export function Home() {
    return (
      <Layout>
      <div className={styles.home}>
				<h1>Vite + React</h1>
				<div>
					<button>
						count is 0
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p>
					Click on the Vite and React logos to learn more
				</p>
			</div>
      </Layout>
      
    );
}