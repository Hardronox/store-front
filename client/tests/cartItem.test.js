import React from 'react';
import CartItem from '../components/reusable/CartItem';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({
    adapter: new Adapter()
});

const mockItem = {
    id: 6,
    seller: "acronwing23342",
    image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
    title: "Kitty",
    description: {
    "condition": "battered",
        "color": "gray",
        "model": "iKitty 6S",
        "storage": "64GB"
        },
    price: 121.99
}

describe("<CartItem/>", () => {
    const wrapper = shallow(<CartItem item={mockItem} />)
    it("should contain 4 button elements", () => {
        expect(wrapper.find('button').length).toBe(4)
    })
    it("calls removeItem Redux action creator on button click", () => {
        const props = {
            onRemove: jest.fn(),
            item: mockItem
        }
        const wrapper = shallow(<CartItem {...props} />)
        wrapper.find('button').at(2).simulate('click')
        expect(props.onRemove).toHaveBeenCalledWith(6)
    })
    it("renders correctly", () => {
        const tree = shallow*<CartItem item={mockItem}/>
        expect(toJson(tree)).toMatchSnapshot()
    })
});

// it("calls ComponentDidMount 0 times", () => {
//     jest.spyOn(CartItem.prototype.componentDidMount)
//     expect(CartItem.prototype.componentDidMount.mock.calls.length).toBe(0)
// })