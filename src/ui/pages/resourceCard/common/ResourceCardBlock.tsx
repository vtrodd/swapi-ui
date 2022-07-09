import { ReactComponent as DropdownArrow } from '@material-symbols/svg-400/rounded/keyboard_arrow_down.svg'
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Box
} from '@mui/material'
import { ReactNode } from 'react'

import './ResourceCardBlock.scss'

export type ResourceCardBlockProps = Omit<AccordionProps, 'children'> & {
  gridStyles?: {
    gridColumn?: string
    gridRow?: string
  }
  children?: ReactNode
}

export const ResourceCardBlock = ({children, title, gridStyles, ...props}: ResourceCardBlockProps) => {
  return (
    <Box className='resource-card-block' style={gridStyles}>
      <Accordion {...props} defaultExpanded disableGutters>
        <AccordionSummary
          expandIcon={<DropdownArrow/>}
        >
          <h1>{title}</h1>
        </AccordionSummary>

        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}