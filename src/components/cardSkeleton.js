import { Skeleton, useMantineTheme } from "@mantine/core"

const CardSkeleton = () => {

    const theme = useMantineTheme()

    return <div className="card_skeleton">
    
        <Skeleton 
            height="250px"
        />
        <div 
            style={{
                width: "100%",
                padding: "15px",
                background: theme.colors.indigo[8]
            }}
        >
            <Skeleton height="10px" width="50%" />
        </div>
    
    </div>

}

export default CardSkeleton