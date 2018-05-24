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
            return(
                <div className="mailing-list-item flex-row" key={item.name}>
                    <div className="mailing-list-checkbox-container">
                        <Field name={item.name} component="input" type="checkbox" className="mailing-list-checkbox" />
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
    render() {
        console.log(43535);
        return (
          <div className="mailing-list-container">
              {this.renderMailingListItems()}
          </div>
        );
    }
}

export default MailingComponent;