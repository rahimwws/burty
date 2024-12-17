import React, { useRef, useEffect } from "react";
import Toast, { ToastRef, ToastProps } from "./Toast";

let toastRef: ToastRef | null = null;

export const ToastProvider = () => {
	const ref = useRef<ToastRef>(null);

	useEffect(() => {
		toastRef = ref.current;
	}, []);

	return <Toast ref={ref} />;
};

export const toast = {
	show: (props: ToastProps) => {
		if (toastRef) {
			toastRef.show(props);
		} else {
			console.warn("ToastProvider is not mounted");
		}
	},
};
