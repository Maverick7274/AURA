
function Table() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <table className="w-[80%] table table-md">
          {/* head */}
          <thead className="text-[2rem] font-kanit text-accent opacity-70">
            <tr className="text-center">
              <th>S.No.</th>
              <th>Event Name</th>
              <th>Instructions</th>
              <th>Date</th>
              <th>Time</th>
              <th>Department/Club</th>
              <th>Registration</th>
            </tr>
          </thead>
          <tbody>
            {/* Ideathon */}
            <tr className="hover text-center font-space-grotesk">
              <th className="font-space-mono text-[2rem]">1</th>
              <td className="text-[1.8rem]">Ideathon</td>
              <td><button className="btn btn-primary">Click Here</button></td>
              <td className="text-[1.8rem]">04/09/23</td>
              <td className="text-[1.8rem] leading-7">11 AM</td>
              <td className="text-[1.8rem]">Fusion Tech Club</td>
              <td className="text-[1.8rem]"><a  href="" className="link link-success">Link Here</a></td>
            </tr>
            {/* Open Mic Show */}
            <tr className="hover text-center font-space-grotesk">
              <th className="font-space-mono text-[1.8rem]">2</th>
              <td className="text-[1.8rem] leading-7">Open Mic Show</td>
              <td><button className="btn btn-primary">Click Here</button></td>
              <td className="text-[1.8rem]"></td>
              <td className="text-[1.8rem]"></td>
              <td className="text-[1.8rem]">Psychology</td>
              <td className="text-[1.8rem]"><a target="blank" href="https://surveyheart.com/form/64c38eeac616f064562bf804" className="link link-success">Link Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
