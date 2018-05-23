import React from 'react';
import CartComponent from '../components/CartComponent';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({
    adapter: new Adapter()
});


describe("<CartComponent>", () => {
    it("calls ComponentDidMount", () => {
        const spy = jest.spyOn(CartComponent.prototype, "componentDidMount")
        const props = {
            cart: {
                cartProducts: []
            }
        }
        const wrapper = shallow(<CartComponent {...props}/>)
        expect(spy).toHaveBeenCalled();
    })
    // it("gets a cart prop", () => {
    //     const props = {
    //         cart: {
    //             cartProducts: ['cartProduct']
    //         }
    //     }
    //     const wrapper = shallow(<CartComponent {...props} />)
    //     console.log(wrapper.prop('cart'));
        //expect(wrapper.props().cart.cartProducts).toEqual(`['cartProduct']}`);
    //})
    it('should handle openListItem state changes', () => {
        const props = {
            cart: {
                cartProducts: []
            }
        }
        const wrapper = shallow(<CartComponent {...props} />)
        expect(wrapper.state().openListItem).toEqual(-1)
        wrapper.find('div.about-list-item').at(0).simulate('click')
        expect(wrapper.state().openListItem).toEqual(0)
        wrapper.find('div.about-list-item').at(0).simulate('click')
        expect(wrapper.state().openListItem).toEqual(-1)
    });
    it('should pass the correct value to toggleListItem', () => {
        const props = {
            cart: {
                cartProducts: []
            }
        }
        const spy = jest.spyOn(CartComponent.prototype, "toggleListItem")
        const wrapper = shallow(<CartComponent {...props}/>)
        wrapper.find('div.about-list-item').at(0).simulate('click')
        expect(spy).toHaveBeenCalledWith(0)
    })
});

