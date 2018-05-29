import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PersonalInfoComponent extends Component {
    render() {
        return (
            <div className="col-md-7">
                <h2>Personnel information</h2>
                <div className="profile-info">
                    <div className="info-item">
                        <div className="info-item-title">Имя</div>
                        <div className="info-item-field">
                            <div className="profile-info-l-i-text">
                                Узургалиев Топикджон
                            </div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item-title">Электронная почтa</div>
                        <div className="info-item-field">
                            <div className="profile-info-l-i-text">
                                sanya.chuck@mail.ru
                            </div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item-title">Телефон</div>
                        <div className="info-item-field">
                      <span className="profile-info-l-i-text profile-info-l-i-text-indent">
                        +380 (50) 361-29-86
                      </span>&nbsp;
                            <Link to="#" className="profile-info-l-i-link xhr novisited">Подтвердить номер</Link>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item-title">Адрес для доставок</div>
                        <div className="info-item-field">
                            <div className="profile-info-l-i-text">
                                Запорожье Запорожская обл. Запорожье р-н
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PersonalInfoComponent.propTypes = {};

export default PersonalInfoComponent;
