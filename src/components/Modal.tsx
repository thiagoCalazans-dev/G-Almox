import { Children, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


type Props = {
  title?: string
  children: React.ReactNode
  modal: boolean,
  closeModal: () => void
}

export const Modal = ({title, children, modal, closeModal }: Props) => {
 
 return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-auto transform overflow-hidden rounded-2xl bg-zinc-800 p-6 transition-all">
                  {title && <Dialog.Title
                    as="h3"
                    className="text-3xl font-bold mb-6 leading-6 text-zinc-100 text-center"
                  >
                    {title}
                  </Dialog.Title>}
                {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
  
}