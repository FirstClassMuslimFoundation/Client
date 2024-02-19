import banks from '../assets/banks.png'
import qr from '../assets/qr.png'

export const DetailsDonate = () => {
    return (
        <div className='flex justify-center'>
            <div className="flex mt-24 gap-x-24">
                <div className="flex-1">
                    <h1 className="text-4xl p-2 font-light">Donate Here</h1>
                    <p className='text-gray-500 p-2 font-light'>Please kindly proceed to make your<br/> donation here.</p>
                    <div className='p-2'>
                        <img src={qr} alt="" />
                    </div>
                    <h1 className='text-2xl p-2'>Accepted Payment Methods</h1>
                    <div className='p-2'>
                        <img src={banks} alt="" />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className='text-4xl p-3 font-light'>Bank Details</h1>
                    <p className='font-bold text-gray-500 p-3'>Below is the bank information to transfer to<br/> the foundation account. Jazakumullahu<br/> khairan!</p>
                    <div className='flex flex-col p-3 gap-y-8'>
                        <p className='text-gray-500'>Account Number<span className='font-bold px-20'>0450789170</span></p>
                        <p className='text-gray-500'>Beneficiary Name<span className='font-bold px-20'>FCM Foundation</span></p>
                        <p className='text-gray-500'>Bank Name<span className='font-bold px-32'>GT Bank</span></p>
                    </div>
                    <button className="bg-gray-700 py-4 px-8 rounded-full mt-6">Copy Account Details</button>
                </div>
            </div>
        </div>
    )
}