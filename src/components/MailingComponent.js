import React, { Component } from 'react';
import { Field } from 'redux-form';

class MailingComponent extends Component {
    renderMailingListItems() {
        const mailingListItems = [
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '1'
            },
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '2'
            },
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '3'
            },
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '4'
            },
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '5'
            },
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '6'
            },
            {
                title: 'Newsletter',
                description: 'Delivering fresh news straight to your inbox',
                name: '7'
            },
        ];
        return mailingListItems.map((item, i) => {
            return (
                <div className="mailing-list-item flex-row" key={item.name}>
                    <div className="mailing-list-checkbox-container">
                        {/* <Field name={item.name} component="input" type="checkbox" className="mailing-list-checkbox" /> */}
                        <input id={item.name} type="checkbox" className="mailing-list-checkbox" />
                        <label htmlFor={item.name}></label>
                    </div>
                    <div className="mailing-list-details flex-col">
                        <div className="mailing-list-title">
                            {item.title}
                        </div>
                        <div className="mailing-list-description">
                            {item.description}
                        </div>
                    </div>
                </div>
                    );
        })
    }

    renderMailingListChannels() {
        const mailingListChannels = ['Email', 'Viber', 'SMS', 'Browser'];
        return mailingListChannels.map((channel, i) => {
            return (
                <div className="mailing-list-item flex-row" key={i}>
                    <div className="mailing-list-checkbox-container">
                        {/* <Field name={item.name} component="input" type="checkbox" className="mailing-list-checkbox" /> */}
                        <input id={channel} type="checkbox" className="mailing-list-checkbox" />
                        <label htmlFor={channel}></label>
                    </div>
                    <div className="mailing-list-details">
                        <div className="mailing-list-title">
                            {channel}
                        </div>
                    </div>
                </div>
            );
        })
    }
    render() {
        return (
          <div className="mailing-list-container col-md-7">
              <h2 className="mailing-list-main-title">Mailings</h2>
              <div className="mailing-list-types flex-col">
                  <h3 className="mailing-list-section-title">Mailing List Types:</h3>
                  {this.renderMailingListItems()}
              </div>
              <div className="mailing-list-channels flex-col">
                  <h3 className="mailing-list-section-title">Mailing List Channels:</h3>
                  {this.renderMailingListChannels()}
              </div>
          </div>
        );
    }
}

export default MailingComponent;