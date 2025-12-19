import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const nextStep = () => {
		setActiveIndex(activeIndex + 1);
	};
	const clickBack = () => {
		return setActiveIndex(activeIndex - 1);
	};
	const startAgain = () => {
		setActiveIndex(0);
	};

	const clickBtnStep = (i) => setActiveIndex(i);

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((s, i) => {
							return (
								<li
									key={s.id}
									className={
										activeIndex >= i
											? activeIndex === i
												? `${styles['steps-item']} ${styles.active}`
												: `${styles['steps-item']} ${styles.done}`
											: styles['steps-item']
									}
								>
									<button className={styles['steps-item-button']} onClick={() => clickBtnStep(i)}>
										{i + 1}
									</button>
									{s.title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={clickBack} disabled={isFirstStep}>
							Назад
						</button>
						{isLastStep ? (
							<button className={styles.button} onClick={startAgain}>
								Начать сначала
							</button>
						) : (
							<button className={styles.button} onClick={nextStep}>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
