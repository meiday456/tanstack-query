import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary : true,
            //데이터가 저장되고 오래된 데이터라고 간주할때까지의 시간 설정 default 0
            //즉 기본값을 사용하는 경우 요청 완료와 동시에 stale 상태가 된다.
            staleTime : 10000,
            //기본값 5분, 단위 ms , 캐시 데이터가 비워지는시간
            cacheTime : 300000
        },

        mutations : {
            useErrorBoundary : true
        }

    }
})

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
