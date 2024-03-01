import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import React from 'react'

const CreateEvent = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
<<<<<<< HEAD
=======
=======
    const {sessionClaims} = auth();

    const userId = sessionClaims?.userId as string;
  return (
    <>
    <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <h3 className='wrapper h3-bold text-center sm:text-left'>Create Event</h3>
    </section>
    <div className='wrapper my-8'>

        <EventForm userId={userId} type="Create"/>

    </div>

>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
    </>
  )
}

<<<<<<< HEAD
export default CreateEvent
=======
<<<<<<< HEAD
export default CreateEvent
=======
export default CreateEvent
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
