import { Paper, Skeleton } from '@mui/material'
import { styled } from '@mui/system'
import React, { FC } from 'react'

const SkeletonWrapper = styled(Paper)({

})

export const SkeletonTags: FC = () => {
  return (
    <SkeletonWrapper>
            {[...Array(4)].map(_ =>
             <Skeleton height={65}/> 
             )}
    </SkeletonWrapper>
  )
}
