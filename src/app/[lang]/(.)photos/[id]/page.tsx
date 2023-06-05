'use client'
import Modal from '@/components/modal'
import { Button } from '@components/nextui'
// import { Button } from '@nextui-org/button'
// import { Button } from '@nextui-org/react'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <p className="text-center text-white">Modals Detail. ID {params.id}</p>
      <div className="flex items-center justify-center space-x-[20px]">
        <Button>Next UI</Button>
      </div>
    </Modal>
  )
}
