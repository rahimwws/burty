import { TouchableOpacity } from 'react-native'
import React from 'react'
import Typography from '@/shared/ui/Typography';
import styles from './styles';

const Type = ({
    text,
    active,
    onPress,
}: {
    text: string;
    active: boolean;
    onPress: () => void;
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.type,
                active && styles.type_active
            ]}
            onPress={onPress}
        >
            <Typography
                font="m"
                color={active ? "background" : "light"}
            >
                {text}
            </Typography>
        </TouchableOpacity>
    );
};

export default Type