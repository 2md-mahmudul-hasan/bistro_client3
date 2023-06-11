

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-warning text-center my-4">
      <h4 className="text-2xl mb-3">---{subHeading}---</h4>
      <h1 className="border-y-2 w-[300px] mx-auto text-4xl mb-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;