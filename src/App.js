import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState();
	const nextStep = () => {
		console.log('Клик по кнопке ДАЛЕЕ');
	};
	const clickBack = () => {
		console.log('Клик по кнопке НАЗАД');
	};
	const startAgain = () => {
		console.log('Клик по кнопке начать СНАЧАЛА');
	};

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((s, i) => {
							return (
								<li key={s.id} className={styles['steps-item']}>
									{/* + styles.done */}
									{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
									<button className={styles['steps-item-button']}>{i + 1}</button>
									{/* При клике на кнопку установка выбранного шага в качестве активного */}
									{s.title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={clickBack}>
							Назад
						</button>
						<button className={styles.button} onClick={nextStep}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
