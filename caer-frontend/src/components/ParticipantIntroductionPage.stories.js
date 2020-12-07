import { storyFactory } from '~storybook/util/helpers'
import ParticipantIntroductionPage from '@/components/ParticipantIntroductionPage'

// set default properties for the story
export default storyFactory({
  title: 'Participant Introduction Page',
  component: ParticipantIntroductionPage,
  // these are component-level default arguments to the component being tested
  args: {
    topic: 'Autonomous Vehicles',
    timeHorizon: '30 Years',
  },
  description:
    'The Participant Introduction Page allows participants to view their assigned topic,' +
    'from their given session ID.',
})

// Create a master template upon which to create all
// of the stories. This should generate variables for
// all of the properties that can be passed to the
// component, e.g. `topic`
const Template = (args, { argTypes }) => ({
  components: { ParticipantIntroductionPage },
  props: Object.keys(argTypes),
  template: '<participant-introduction-page :topic="topic" :time-horizon="timeHorizon"/>',
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

export const ColdFusion = Template.bind({})
ColdFusion.args = { topic: 'Cold Fusion', timeHorizon: '40 Years' }
