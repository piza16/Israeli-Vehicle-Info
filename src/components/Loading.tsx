export const Loading = () => {
    return (<div className="flex flex-col items-center justify-center">
        <link rel="stylesheet" href="https://pagecdn.io/lib/font-awesome/5.10.0-11/css/all.min.css" integrity="sha256-p9TTWD+813MlLaxMXMbTA7wN/ArzGyW/L7c5+KkjOkM=" crossOrigin="anonymous"/>
        <div className="w-full h-full fixed block top-0 left-0 bg-red-300 opacity-30 z-50">
            <span className="text-green-700 opacity-1 top-1/2 -right-1/2  block relative" style={{top:"40%",left:"36%"}}>
                <i className="fas fa-circle-notch fa-spin fa-6x"></i>
            </span>
        </div>
    </div>
  );
};
  