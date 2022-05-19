import { Paper, Skeleton } from '@mui/material'
import { styled } from '@mui/system'
import React, { FC } from 'react'

const SkeletonWrapper = styled(Paper)({

})

export const SkeletonTags: FC = () => {
  return (
    <SkeletonWrapper elevation={0}>
            {[...Array(4)].map((_, i) =>
             <Skeleton key = {i} height={65}/> 
             )}
    </SkeletonWrapper>
  )
}
