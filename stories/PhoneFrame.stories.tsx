import type { Meta, StoryObj } from '@storybook/react'
import PhoneFrame from '../components/PhoneFrame'
const meta: Meta<typeof PhoneFrame> = { title: 'Components/PhoneFrame', component: PhoneFrame }
export default meta
export const Focus: StoryObj<typeof PhoneFrame> = { args: { label: 'Focus' } }