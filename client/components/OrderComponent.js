import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';


// export const validate = (values) => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required'
//     }
//     // if (!values.lastName) {
//     //     errors.lastName = 'Required'
//     // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     //     errors.email = 'Invalid email address'
//     // }
//     // if (!values.age) {
//     //     errors.age = 'Required'
//     // } else if (isNaN(Number(values.age))) {
//     //     errors.age = 'Must be a number'
//     // } else if (Number(values.age) < 18) {
//     //     errors.age = 'Sorry, you must be at least 18 years old'
//     // }
//     return errors;
// }

const renderField = ({ input, className, type, meta: { touched, error }}) => {
    console.log(error);
    return (
        <Fragment>
            <input {...input} type={type} className={className}/>
            {touched && error && <span className="error">{error}</span>}
        </Fragment>
    );
}
class OrderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uncheckedResults: []
    }
  }

  componentDidMount() {

  }

  onSubmit(values) {
      console.log(values);
      this.props.submitOrder(values)
  }

  getClassName = (name) => {
     return this.props.orderForm.values[name] ? 'filled' : '';
  }

  getValue = (name) => {
      return this.props.orderForm.values[name] ? this.props.orderForm.values[name] : '';
  }

  render() {

      // TODO: get items to display
      // This item is for layout purposes
      let item = {
          title: "Apple MacBook Pro 15 (2016) i7-6920HQ/16GB/512G SSD/Touch Bar/Radeon Pro 460 4GB",
          src: "../images/Huawei-matebook-x-13-0-inte-core-i5-7200U-i7-7500U-4-8.jpg",
          price: "2199.99",
          shippingCharge: "90.50",
          importCharge: "552.43",
          seller: "deal_train",
          quantity: 1
      }
      console.log(this.props);

      const { handleSubmit, pristine, reset, submitting, orderForm } = this.props;

    return (
      <main className="main-container" role="main">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="flex-row form-ctr">
              <div className="left-section flex-col">
                <div className="item-details-ctr flex-col">
                  <h2 className="section-title">Review items and shipping</h2>
                  <div className="item-details flex-col">
                    <div className="seller-info flex-row">
                      <span>
                        <span className="lbl">Seller: {item.seller}</span>
                      </span>
                    </div>
                    <div className="seller-item flex-row">
                        <div className="seller-image-ctr">
                            <img className="seller-image" src={item.src} alt="item"/>
                        </div>
                        <div className="item-info-ctr flex-col">
                          <div className="item-info flex-row">
                            <div className="item-title">{item.title}</div>
                            <div className="item-price">${item.price}</div>
                          </div>
                          <div className="item-quantity flex-row">
                            <label className="lbl" htmlFor="orderQuantity">Quantity</label>
                              <Field component="select" name="orderQuantity" value="1">
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10+">10+</option>
                              </Field>
                          </div>
                            <div className="item-shipping flex-col">
                                <div className="item-global-shipping flex-col">
                                    <span>Shipping</span>
                                    <span>Est. delivery:</span>
                                    <span>International Priority Shipping <i className="fa fa-info-circle"
                                                                             aria-hidden="true"></i></span>
                                    <span>Includes international tracking</span>
                                    <span>US ${item.shippingCharge}</span>
                                </div>
                                <div className="item-shipping-charge flex-col">
                                    <span>Import charges <i className="fa fa-info-circle" aria-hidden="true"></i></span>
                                    <span>No additional import charges at delivery.</span>
                                    <span>US ${item.importCharge}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="shipping-address-ctr flex-col">
                    <h2 className="section-title">Ship to</h2>
                    <div className="shipping-address flex-col">
                        <div className="flex-row select-ctr">
                            <label htmlFor="shippingCountry">Country or region</label>
                            <Field
                                component="select"
                                name="shippingCountry"
                                dvalue="UA"
                                autoComplete="country">
                                <option value="US">United States</option>
                                <option value="AA">APO/FPO/DPO</option>
                                <option value="CA">Canada</option>
                                <option value="GB">United Kingdom</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan Republic</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BR">Brazil</option>
                                <option value="VG">British Virgin Islands</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde Islands</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CD">Congo, Democratic Republic of the</option>
                                <option value="CG">Congo, Republic of the</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Cote d Ivoire (Ivory Coast)</option>
                                <option value="HR">Croatia, Republic of</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Islas Malvinas)</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="GA">Gabon Republic</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KR">Korea, South</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Laos</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MK">Macedonia</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia</option>
                                <option value="MD">Moldova</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="SH">Saint Helena</option>
                                <option value="KN">Saint Kitts-Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="PM">Saint Pierre and Miquelon</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="SM">San Marino</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania</option>
                                <option value="TH">Thailand</option>
                                <option value="TG">Togo</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VA">Vatican City State</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="VI">Virgin Islands (U.S.)</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="WS">Western Samoa</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                            </Field>
                        </div>
                        <div className="flex-row">
                            <div className="input-ctr">
                                {   // Required attribute in this and all the following inputs is to hide the floating label once the user has entered some text
                                    // TODO: find out if there's any other way to achieve the same effect
                                    }
                                <Field
                                    name="firstName"
                                    component={renderField}
                                    type="text"
                                    className={this.getClassName('firstName')}
                                />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="input-ctr">
                                <Field name="lastName" component={renderField} type="text" className={this.getClassName('lastName')}/>
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="input-ctr">

                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="input-ctr">
                                <Field name="streetAddress" component={renderField} type="text" className={this.getClassName('streetAddress')}/>
                                <label htmlFor="streetAddress">Street Address</label>
                            </div>
                            <div className="input-ctr">
                                <Field name="streetAddress2" component={renderField} type="text" className={this.getClassName('streetAddress2')}/>
                                <label htmlFor="streetAddress2">Street Address 2 (Optional)</label>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="input-ctr">
                                <Field name="city" component={renderField} type="text" className={this.getClassName('city')}/>
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="input-ctr">
                                <Field name="state" component={renderField} type="text" className={this.getClassName('state')}/>
                                <label htmlFor="state">State</label>
                            </div>
                            <div className="input-ctr">
                                <Field name="zipCode" component={renderField} type="text" className={this.getClassName('zipCode')}/>
                                <label htmlFor="zipCode">ZIP Code</label>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="input-ctr">
                                <Field name="email" component={renderField} type="email" className={this.getClassName('email')}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-ctr">
                                <Field name="confirmEmail" component={renderField} type="email" className={this.getClassName('confirmEmail')}/>
                                <label htmlFor="confirmEmail">Confirm email</label>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="input-ctr">
                                <Field name="phone" component={renderField} type="tel" className={this.getClassName('phone')}/>
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                        </div>
                        {/*<div className="flex-row button-ctr">*/}
                            {/*<button className="btn btn-primary">*/}
                                {/*Done*/}
                            {/*</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="payment-methods-ctr">
                    <h2 className="section-title">Pay with</h2>
                    <div className="payment-methods">
                        <div>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="incentives-ctr">
                    <h2 className="section-title">Add coupons</h2>
                    <div className="incentives">
                        <div>
                            <label htmlFor="couponCode">Enter code</label>
                            <Field name="couponCode" component="input" type="text"/>
                            <button className="btn btn-secondary">Apply</button>
                        </div>
                    </div>
                </div>
              </div>

                <div className="right-section">
                    <div className="confirmation-ctr">
                        <div className="confirmation">
                            <div className="flex-row space-between">
                                <span>Item ({this.props.orderForm.values.orderQuantity})</span>
                                <span>US ${(item.price * this.props.orderForm.values.orderQuantity).toFixed(2)}</span>
                            </div>
                            <div className="flex-row space-between">
                                <span>Shipping</span>
                                <span>US ${item.shippingCharge}</span>
                            </div>
                            <div className="flex-row space-between">
                                <span>Import charges</span>
                                <span>US ${item.importCharge}</span>
                            </div>
                        </div>
                        <div className="order-total-ctr">
                            <div className="flex-row space-between">
                                <span>Order Total</span>
                                <span className="order-total-price">US ${(+item.price * this.props.orderForm.values.orderQuantity + +item.shippingCharge + +item.importCharge).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="button-ctr">
                            <button type="submit" disabled={ pristine || submitting } className="btn btn-primary">Confirm and pay</button>
                        </div>

                    </div>
                </div>
            </div>
          </form>
      </main>
    );
  }
}

OrderComponent.propTypes = {
  children: PropTypes.element,

};


export default OrderComponent;
