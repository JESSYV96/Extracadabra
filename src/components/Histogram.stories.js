import Histogram from "./Histogram.vue";

export default {
    title: 'Components/Histogram',
    component: Histogram
}

const Template = (_, { argTypes }) => ({
    components: { Histogram },
    props: Object.keys(argTypes),
    template: '<Histogram v-bind="$props" />',
});

export const DefaultHistogram = Template.bind({});
DefaultHistogram.args = {
    numberList: [
        "9", "1", "9", "2", "3", "4",
        "2", "4", "6", "1", "7", "3", "6"
    ]
}