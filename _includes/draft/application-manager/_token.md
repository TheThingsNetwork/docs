# Get an Access Token

To use these APIs you need a JSON Web Access Token with a proper scope. Alternatively, you can use an Application Access Key. The APIs will then exchange this for a token.

Because this exchange happens on every request it is better to do this yourself. This will improve the performance and you will continue to be able to use the Application Manager API even if for some reason the Account Server is down.

To manually exchange the key for a token, see the [Account Server API Reference](/account/#exchanging-an-access-key-for-an-access-token).
