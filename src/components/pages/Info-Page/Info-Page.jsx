import React from 'react';
import styles from './styles.module.scss';

const InfoPage = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <span>Май 2022 года.</span>
        <span>Ghothelon 1.0</span>
      </div>
      <div>
        <h1 className={styles.mainTitle}>Тодо инш!</h1>
        <h3>Приветствую, друг!</h3>
      </div>
      <div className={styles.qA}>
        <p className={styles.infoTitle}>О чем?</p>
        <p>
          Ты попал на сайт, посвященный выдуманному миру, - Гхотэлон. Моей
          давней мечтой было создать некую энциклопедию о мире, который родился
          в моей голове, а самым заветным желанием - увидеть интерактивную карту
          Гхотэлона. Еще со времен средней школы я долго размышляла над этим и
          наконец смогла взяться и претворить заветную мечту в жизнь. Как
          говорится, глаза боятся - руки делают.
        </p>
      </div>
      <div className={styles.qA}>
        <p className={styles.infoTitle}>Карта есть, а где же энциклопедия?</p>
        <p>
          Со временем на сайт будет добавлена вкладка с большими статьями о
          разных событиях, персонажах, - в целом, о мире, - из которых можно
          будет узнать поподробнее о его устройстве. Также будет добавлен
          словарик с пояснением непонятных слов, принадлежащих миру Гхотэлона.
          Автором ведется работа во всех аспектах творчества: даже
          конструирование языков, - поэтому нечто подобное просто необходимо для
          понимания и осознания событий и устроения мира. В черновиках хранится
          много информации, и я с нетерпением жду, когда смогу всем этим
          поделиться!
        </p>
      </div>
      <div className={styles.qA}>
        <p className={styles.infoTitle}>
          Насколько проработан Гхотэлон? Какие события отражены на карте?
        </p>
        <p>
          Это достаточно сложный вопрос, так как создание мира - это долгий
          процесс, который может занимать всю человеческую жизнь. Поэтому мир
          проработан настолько, насколько он проработан. И некий "основной
          сюжет", о котором меня постоянно спрашивают, существует, - но мне это
          менее интересно. Куда более захватывающе - создавать целую историю,
          рождать и убивать персонажей, возводить и разрушать города и даже
          государства. Вшивать нити событий в полотно истории - вот что стоит во
          главе.
        </p>
        <p>
          На карту добавлена не вся информация, о которой мне бы хотелось
          донести. Например, нет названий некоторых нанесённых рек и нет более
          подробной информации о некоторых объектах (зачастую это моря и реки).
          Карта находится в активной разработке, и поэтому некоторые вещи,
          изображенные на ней, могут находиться не на своём месте. Как во всём
          этом будет найден компромисс, информация точно добавится или
          обновится.
        </p>
        <p>
          Как можно заметить, в легенде карты написано: "Гхотэлон 1йе.". Если
          "Гхотэлон" - это название мира, то что означет "1йе." ? Если
          расшифровать, то мы получим первый йерум. Йерум - это единица времени,
          которая вмещает в себя очень много лет (количество лет, как правило,
          не ограничивается). Альтерантива йерума в нашем мире - это век. Таким
          образом, на карте изображен Гхотэлон в период первого йерума.
        </p>
      </div>
      <div className={styles.qA}>
        <p className={styles.infoTitle}>Как создана карта?</p>
        <p>
          Карта сделана как react-приложение с использованием библиотеки
          leaflet. Сама карта была нарисована в фотошопе очень давно, и, к
          слову, совсем не предназначалась для того, чтобы её использовали в
          интерактивных целях. Поэтому сейчас её функционал очень скуден, но
          будет со временем пополняться, пока не перерастет в более новую,
          вторую версию (с обновлённым дизайном).
        </p>
        <p>
          Версия, существующая сейчас - это некая попытка изучить
          инструмантарий, с помощью которого можно создавать подобные чудеса.
          Чуть позже я обязательно добьюсь того, чтобы Гхотэлон заиграл ещё в
          более ярких красках.
        </p>
      </div>
      <div className={styles.qA}>
        <p className={styles.infoTitle}>Контакты</p>
        <p>
          Со мной можно связаться через telegram - @emiliyaYU, или написать мне
          на почту - chikoch19@gmail.com.
        </p>
      </div>
    </div>
  );
};
export default InfoPage;
