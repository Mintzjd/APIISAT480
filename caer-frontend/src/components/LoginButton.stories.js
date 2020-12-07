import { storyFactory } from '~storybook/util/helpers'
import LoginButton from '@/components/LoginButton'

// set default properties for the story
export default storyFactory({
  title: 'Login Button',
  component: LoginButton,
  // these are component-level default arguments to the component being tested
  args: {
  },
  description:
    'The Login button sends people to the Auth0 login page.',
})

// Create a master template upon which to create all
// of the stories. This should generate variables for
// all of the properties that can be passed to the
// component, e.g. `greeting`
const Template = (args, { argTypes }) => ({
  components: { LoginButton },
  props: Object.keys(argTypes),
  template: '<login-button />',
})

/**
 * Stories
 *
 * You need AT LEAST ONE story like the ones below.
 * The first one is treated as the "defaul" story.
 * In general stories should be named using PascalCase,
 * i.e. start with a capital letter and then capitalize
 * all words.
 */

// Create a story based on the template and pass
// default props to it. This will trigger the creation
// of the Controls panel within Storybook that allows
// you to tweak the values, as desired.
// see: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
export const Default = Template.bind({})

// export const Hello = Template.bind({})
// Hello.args = { greeting: 'Hello' }
