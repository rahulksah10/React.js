
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


const ViewPaste = () => {


  const { id } = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);
  console.log("final all pastes", paste);

  //   if (!paste) {
  //   return <p className="pl-8">Paste not found</p>;
  // }



  return (
    <div className='pl-8'>
      <div>
        <input
          type="text"
          placeholder='enter title here'
          value={paste?.title}
          onChange={(e) => setTitle(e.target.value)}
          disabled
          className='border rounded' />

      </div>
      <div>
        <textarea name="" id=""
          className='border'
          value={paste?.content}
          onChange={(e) => setvalue(e.target.value)}
          disabled
          placeholder='enter content here'
          rows={25} cols={40}

        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste
