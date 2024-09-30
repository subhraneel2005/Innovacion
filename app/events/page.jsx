import IndividualEvent from '@/components/IndividualEvent'
import React from 'react'
import { Suspense } from 'react';

export default function event() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IndividualEvent />
    </Suspense>
  )
}
