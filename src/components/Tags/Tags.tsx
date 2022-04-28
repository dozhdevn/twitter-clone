import { FC } from "react"
import { Divider, List, ListItemText, Typography } from '@mui/material'
import { RightSideBlock, RightSideBlockHeader, RightSideBlockItem } from './styledComponentTags';
import { useSelector } from "react-redux";
import { selectTags } from "../../store/Tags/selectors";
import { SkeletonTags } from "../SkeletonTags";

export const Tags: FC = (): React.ReactElement => {

    const { tags, loading } = useSelector(selectTags)
    console.log(tags, loading)

    return (
        <RightSideBlock>
            <RightSideBlockHeader variant="outlined">
                <b>Актуальные темы</b>
            </RightSideBlockHeader>

            {
                loading ?
                <SkeletonTags/> :
                <List>
                    {
                        tags.map(tag =>
                            <>
                                <RightSideBlockItem key={tag._id}>
                                    <ListItemText
                                        primary={tag.name}
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: {tag.count}
                                            </Typography>
                                        } />
                                </RightSideBlockItem>
                                <Divider component="li" />
                            </>

                        )
                    }
                </List>
            }   
                
        </RightSideBlock>
    )
}
