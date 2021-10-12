export const api = {
    trackEvent({
        user,
        event,
        payload,
        }: {
        user: string;
        event: string;
        payload?: {};
        }) {
        return new Promise<void>(resolve => {
            resolve();
        });
        },
        addCourse(course: string) {
        return new Promise<void>(resolve => {
            resolve();
        });
        },
    };