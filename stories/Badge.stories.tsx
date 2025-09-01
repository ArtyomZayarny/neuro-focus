import type { Meta, StoryObj } from '@storybook/react'
import Badge from '../components/Badge'
const meta: Meta<typeof Badge> = { title: 'Components/Badge', component: Badge }
export default meta
export const Primary: StoryObj<typeof Badge> = { args: { children: 'Scientifically tuned', color: '#38bdf8' } }