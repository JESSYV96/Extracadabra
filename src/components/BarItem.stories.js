import BarItem from './BarItem.vue'

export default {
    title: 'Components/BarItem',
    component: BarItem,
}

const Template = (_, { argTypes }) => ({
    components: { BarItem },
    props: Object.keys(argTypes),
    template: '<BarItem v-bind="$props" />',
});

export const DefaultBarItem = Template.bind({});
DefaultBarItem.args = {
    number: '1',
    occurences: 10
}