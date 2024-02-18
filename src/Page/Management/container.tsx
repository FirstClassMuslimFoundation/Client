interface ManagementContainerProps {
    image: string;
    text: string;
    post: string;
    defaultText: string;
}

export const ManagementContainer: React.FC<ManagementContainerProps> = ({ image, post, text, defaultText }) => {
    return (
        <div className="max-w-xs md:max-w-none bg-white w-full md:w-96 h-96 rounded-2xl flex justify-evenly overflow-hidden hover:underline transition-transform transform hover:scale-110">
            <div className="space-y-6">
                <div className="mt-8">
                    <img
                        className="h-64 w-64 rounded-3xl"
                        src={image}
                        alt="Workflow"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="text-left">
                        <h2 className="text-xl leading-6 font-medium mb-4">{text}</h2>
                        <p className="text-sm">{post}</p>
                        <p className="text-sm">{defaultText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
