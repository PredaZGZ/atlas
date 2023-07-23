import Navbar from "../Components/Navbar.jsx";
import { Card, Text, Metric, Flex } from "@tremor/react";

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <Flex className="my-4">
				<Card className="max-w-xs mx-auto" decoration="bottom" decorationColor="gray">
					<Text>Files</Text>
					<Metric>2</Metric>
				</Card>
				<Card className="max-w-xs mx-auto" decoration="bottom" decorationColor="gray">
					<Text>Folders</Text>
					<Metric>2</Metric>
				</Card>
				<Card className="max-w-xs mx-auto" decoration="bottom" decorationColor="gray">
					<Text>Notes</Text>
					<Metric>2</Metric>
				</Card>
				<Card className="max-w-xs mx-auto" decoration="bottom" decorationColor="gray">
					<Text>Storage</Text>
					<Metric>2</Metric>
				</Card>
            </Flex>
        </>
    )
}